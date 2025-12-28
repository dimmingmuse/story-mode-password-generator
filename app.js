// Passphrase Generator - Application Logic

// Get cryptographically secure random number
function secureRandom(max) {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  return array[0] % max;
}

// Pick random item from array
function pick(arr) {
  return arr[secureRandom(arr.length)];
}

// Build sentence based on word count
// 4: adj noun verb noun
// 5: adj noun adverb verb noun
// 6: adj noun adverb verb adj noun
// 7: adj adj noun adverb verb adj noun
// 8: adj adj noun adverb verb adj adj noun
function buildSentence(wordCount, adjectives, adverbs, nouns, verbs) {
  const subjectPlural = secureRandom(2) === 1;
  const objectPlural = secureRandom(2) === 1;
  
  let parts = [];
  let entropy = 2; // 2 bits for plurality choices
  
  // Subject adjective(s)
  if (wordCount >= 7) {
    // Two adjectives for subject
    const adj1 = pick(adjectives);
    const adj2 = pick(adjectives);
    parts.push(adj1, adj2);
    entropy += Math.log2(adjectives.length) * 2;
  } else {
    // One adjective for subject
    const adj = pick(adjectives);
    parts.push(adj);
    entropy += Math.log2(adjectives.length);
  }
  
  // Subject noun
  const subjectNoun = pick(nouns);
  parts.push(subjectPlural ? subjectNoun.p : subjectNoun.s);
  entropy += Math.log2(nouns.length);
  
  // Adverb (for 5+ words)
  if (wordCount >= 5) {
    const adv = pick(adverbs);
    parts.push(adv);
    entropy += Math.log2(adverbs.length);
  }
  
  // Verb
  const verb = pick(verbs);
  parts.push(subjectPlural ? verb.p : verb.s);
  entropy += Math.log2(verbs.length);
  
  // Object adjective(s)
  if (wordCount >= 6) {
    if (wordCount >= 8) {
      // Two adjectives for object
      const adj1 = pick(adjectives);
      const adj2 = pick(adjectives);
      parts.push(adj1, adj2);
      entropy += Math.log2(adjectives.length) * 2;
    } else {
      // One adjective for object
      const adj = pick(adjectives);
      parts.push(adj);
      entropy += Math.log2(adjectives.length);
    }
  }
  
  // Object noun
  const objectNoun = pick(nouns);
  parts.push(objectPlural ? objectNoun.p : objectNoun.s);
  entropy += Math.log2(nouns.length);
  
  // Add article at the start based on plurality
  let phrase;
  if (subjectPlural) {
    phrase = parts.join(' ');
  } else {
    phrase = 'the ' + parts.join(' ');
  }
  
  return { phrase, entropy, parts };
}

// Generate story mode passphrase
function generateStory() {
  const wordCount = parseInt(document.getElementById('wordCount').value);
  
  return buildSentence(
    wordCount,
    words.adjectives,
    words.adverbs,
    words.nouns,
    words.verbs
  );
}

// Generate alliterative passphrase
function generateAlliterative() {
  const wordCount = parseInt(document.getElementById('wordCount').value);
  const letters = Object.keys(words.byLetter);
  const letter = pick(letters);
  const letterWords = words.byLetter[letter];
  
  const result = buildSentence(
    wordCount,
    letterWords.adj,
    letterWords.adv,
    letterWords.noun,
    letterWords.verb
  );
  
  // Add letter choice entropy
  result.entropy += Math.log2(letters.length);
  result.meta = `Letter: ${letter.toUpperCase()}`;
  
  return result;
}

// Generate themed scene passphrase
function generateThemed() {
  const wordCount = parseInt(document.getElementById('wordCount').value);
  const themeNames = Object.keys(words.themes);
  const themeName = pick(themeNames);
  const theme = words.themes[themeName];
  
  const result = buildSentence(
    wordCount,
    theme.adj,
    theme.adv,
    theme.noun,
    theme.verb
  );
  
  // Add theme choice entropy
  result.entropy += Math.log2(themeNames.length);
  result.meta = `Theme: ${themeName.charAt(0).toUpperCase() + themeName.slice(1)}`;
  
  return result;
}

// Main generate function
function generatePassphrase() {
  const mode = document.getElementById('mode').value;
  
  let result;
  switch (mode) {
    case 'story':
      result = generateStory();
      break;
    case 'alliterative':
      result = generateAlliterative();
      break;
    case 'themed':
      result = generateThemed();
      break;
  }
  
  displayPassphrase(result);
}

// Display the generated passphrase
function displayPassphrase(result) {
  const container = document.getElementById('passphrase');
  container.innerHTML = '';
  
  // Split phrase into words for animation
  const phraseWords = result.phrase.split(' ');
  
  phraseWords.forEach((word, i) => {
    const span = document.createElement('span');
    span.className = 'word';
    span.textContent = word;
    span.style.animationDelay = `${i * 0.04}s`;
    container.appendChild(span);
    
    if (i < phraseWords.length - 1) {
      container.appendChild(document.createTextNode(' '));
    }
  });
  
  // Update entropy display
  const entropyEl = document.getElementById('entropy');
  const entropyFill = document.getElementById('entropyFill');
  const roundedEntropy = Math.round(result.entropy);
  
  entropyEl.textContent = `${roundedEntropy} bits`;
  
  // Color based on strength
  let strength, color;
  if (roundedEntropy >= 55) {
    strength = 'strong';
    color = '#00d4aa';
  } else if (roundedEntropy >= 45) {
    strength = 'moderate';
    color = '#ff9f43';
  } else {
    strength = 'weak';
    color = '#ff6b6b';
  }
  
  entropyEl.className = `entropy-value ${strength}`;
  entropyFill.style.width = `${Math.min(100, (roundedEntropy / 70) * 100)}%`;
  entropyFill.style.background = color;
  
  // Update meta info if present
  const metaEl = document.getElementById('meta');
  if (result.meta) {
    metaEl.textContent = result.meta;
    metaEl.style.display = 'block';
  } else {
    metaEl.style.display = 'none';
  }
}

// Copy to clipboard
function copyToClipboard() {
  const passphrase = document.getElementById('passphrase').textContent;
  
  navigator.clipboard.writeText(passphrase).then(() => {
    const btn = document.getElementById('copy');
    btn.classList.add('copied');
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Copied!
    `;
    setTimeout(() => {
      btn.classList.remove('copied');
      btn.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        Copy
      `;
    }, 1500);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', generatePassphrase);
  document.getElementById('copy').addEventListener('click', copyToClipboard);
  document.getElementById('mode').addEventListener('change', generatePassphrase);
  document.getElementById('wordCount').addEventListener('change', generatePassphrase);
  
  // Keyboard shortcut - spacebar to regenerate
  document.addEventListener('keydown', (e) => {
    if (e.code === 'Space' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'SELECT') {
      e.preventDefault();
      generatePassphrase();
    }
  });
  
  // Generate initial passphrase
  generatePassphrase();
});
