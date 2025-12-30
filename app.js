// Passphrase Generator - Application Logic

// Pattern definitions for each word count
// Format: array of { id, label, parts } where parts are 'adj', 'adv', 'noun', 'verb'
const patterns = {
  4: [
    { id: 'anvn', label: 'adj-noun-verb-noun', parts: ['adj', 'noun', 'verb', 'noun'] },
    { id: 'nvan', label: 'noun-verb-adj-noun', parts: ['noun', 'verb', 'adj', 'noun'] },
    { id: 'navn', label: 'noun-adverb-verb-noun', parts: ['noun', 'adv', 'verb', 'noun'] }
  ],
  5: [
    { id: 'anvan', label: 'adj-noun-verb-adj-noun', parts: ['adj', 'noun', 'verb', 'adj', 'noun'] },
    { id: 'anavn', label: 'adj-noun-adv-verb-noun', parts: ['adj', 'noun', 'adv', 'verb', 'noun'] },
    { id: 'aanvn', label: 'adj-adj-noun-verb-noun', parts: ['adj', 'adj', 'noun', 'verb', 'noun'] },
    { id: 'nvaan', label: 'noun-verb-adj-adj-noun', parts: ['noun', 'verb', 'adj', 'adj', 'noun'] }
  ],
  6: [
    { id: 'anavan', label: 'adj-noun-adv-verb-adj-noun', parts: ['adj', 'noun', 'adv', 'verb', 'adj', 'noun'] },
    { id: 'aanvan', label: 'adj-adj-noun-verb-adj-noun', parts: ['adj', 'adj', 'noun', 'verb', 'adj', 'noun'] },
    { id: 'anvaan', label: 'adj-noun-verb-adj-adj-noun', parts: ['adj', 'noun', 'verb', 'adj', 'adj', 'noun'] },
    { id: 'navaan', label: 'noun-adv-verb-adj-adj-noun', parts: ['noun', 'adv', 'verb', 'adj', 'adj', 'noun'] }
  ],
  7: [
    { id: 'aanavan', label: 'adj-adj-noun-adv-verb-adj-noun', parts: ['adj', 'adj', 'noun', 'adv', 'verb', 'adj', 'noun'] },
    { id: 'anavaan', label: 'adj-noun-adv-verb-adj-adj-noun', parts: ['adj', 'noun', 'adv', 'verb', 'adj', 'adj', 'noun'] },
    { id: 'aanvaan', label: 'adj-adj-noun-verb-adj-adj-noun', parts: ['adj', 'adj', 'noun', 'verb', 'adj', 'adj', 'noun'] }
  ],
  8: [
    { id: 'aanavaan', label: 'adj-adj-noun-adv-verb-adj-adj-noun', parts: ['adj', 'adj', 'noun', 'adv', 'verb', 'adj', 'adj', 'noun'] },
    { id: 'aaanvaan', label: 'adj-adj-adj-noun-verb-adj-adj-noun', parts: ['adj', 'adj', 'adj', 'noun', 'verb', 'adj', 'adj', 'noun'] },
    { id: 'aanvaaan', label: 'adj-adj-noun-verb-adj-adj-adj-noun', parts: ['adj', 'adj', 'noun', 'verb', 'adj', 'adj', 'adj', 'noun'] }
  ]
};

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

// Build sentence based on pattern array
function buildSentenceFromPattern(patternParts, adjectives, adverbs, nouns, verbs) {
  const subjectPlural = secureRandom(2) === 1;
  const objectPlural = secureRandom(2) === 1;
  
  let parts = [];
  let entropy = 2; // 2 bits for plurality choices
  
  // Track if we've hit the verb yet (to determine subject vs object)
  let pastVerb = false;
  let verbIndex = patternParts.indexOf('verb');
  
  patternParts.forEach((partType, index) => {
    if (partType === 'adj') {
      const adj = pick(adjectives);
      parts.push(adj);
      entropy += Math.log2(adjectives.length);
    } else if (partType === 'adv') {
      const adv = pick(adverbs);
      parts.push(adv);
      entropy += Math.log2(adverbs.length);
    } else if (partType === 'noun') {
      const noun = pick(nouns);
      // Determine if this is subject or object noun
      if (index < verbIndex) {
        // Subject noun
        parts.push(subjectPlural ? noun.p : noun.s);
      } else {
        // Object noun
        parts.push(objectPlural ? noun.p : noun.s);
      }
      entropy += Math.log2(nouns.length);
    } else if (partType === 'verb') {
      const verb = pick(verbs);
      parts.push(subjectPlural ? verb.p : verb.s);
      entropy += Math.log2(verbs.length);
      pastVerb = true;
    }
  });
  
  // Add article at the start based on first element and plurality
  let phrase;
  const firstNounIndex = patternParts.indexOf('noun');
  
  if (firstNounIndex === 0) {
    // Starts with noun
    if (subjectPlural) {
      phrase = parts.join(' ');
    } else {
      phrase = 'the ' + parts.join(' ');
    }
  } else {
    // Starts with adjective
    if (subjectPlural) {
      phrase = parts.join(' ');
    } else {
      phrase = 'the ' + parts.join(' ');
    }
  }
  
  return { phrase, entropy, parts };
}

// Build sentence based on word count (legacy function for alliterative/themed modes)
function buildSentence(wordCount, adjectives, adverbs, nouns, verbs) {
  // Use default pattern for each word count
  const defaultPatterns = {
    4: ['adj', 'noun', 'verb', 'noun'],
    5: ['adj', 'noun', 'adv', 'verb', 'noun'],
    6: ['adj', 'noun', 'adv', 'verb', 'adj', 'noun'],
    7: ['adj', 'adj', 'noun', 'adv', 'verb', 'adj', 'noun'],
    8: ['adj', 'adj', 'noun', 'adv', 'verb', 'adj', 'adj', 'noun']
  };
  
  return buildSentenceFromPattern(defaultPatterns[wordCount], adjectives, adverbs, nouns, verbs);
}

// Generate story mode passphrase
function generateStory() {
  const wordCount = parseInt(document.getElementById('wordCount').value);
  const patternSelect = document.getElementById('pattern');
  const selectedPatternId = patternSelect.value;
  
  // Find the selected pattern
  const patternDef = patterns[wordCount].find(p => p.id === selectedPatternId) || patterns[wordCount][0];
  
  const result = buildSentenceFromPattern(
    patternDef.parts,
    words.adjectives,
    words.adverbs,
    words.nouns,
    words.verbs
  );
  
  result.meta = patternDef.label;
  
  return result;
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

// Generate minimal typing passphrase
// Pattern: FourWordsInTitleCase1!
function generateMinimal() {
  const shortWords = words.short;
  const targetMin = 15; // minimum characters before suffix
  const targetMax = 20; // maximum characters before suffix
  const suffix = "1!";
  
  let selectedWords = [];
  let totalLength = 0;
  let attempts = 0;
  
  // Try to hit 15-18 chars with 4 words
  while (attempts < 50) {
    selectedWords = [];
    totalLength = 0;
    
    for (let i = 0; i < 4; i++) {
      const word = pick(shortWords);
      selectedWords.push(word);
      totalLength += word.length;
    }
    
    if (totalLength >= targetMin - 2 && totalLength <= targetMax) {
      break;
    }
    attempts++;
  }
  
  // Title case each word
  const titleCased = selectedWords.map(w => 
    w.charAt(0).toUpperCase() + w.slice(1)
  );
  
  const phrase = titleCased.join('') + suffix;
  const charCount = phrase.length;
  
  // Entropy: 4 words from short list
  const entropy = 4 * Math.log2(shortWords.length);
  
  return {
    phrase,
    entropy,
    parts: titleCased,
    meta: `${charCount} characters`
  };
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
    case 'minimal':
      result = generateMinimal();
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

// Populate pattern dropdown based on word count
function updatePatternOptions() {
  const wordCount = parseInt(document.getElementById('wordCount').value);
  const patternSelect = document.getElementById('pattern');
  const availablePatterns = patterns[wordCount] || [];
  
  // Clear existing options
  patternSelect.innerHTML = '';
  
  // Add new options
  availablePatterns.forEach((pattern, index) => {
    const option = document.createElement('option');
    option.value = pattern.id;
    option.textContent = pattern.label;
    if (index === 0) option.selected = true;
    patternSelect.appendChild(option);
  });
}

// Update UI visibility based on mode
function updateUIForMode() {
  const mode = document.getElementById('mode').value;
  const wordCountGroup = document.getElementById('wordCountGroup');
  const patternGroup = document.getElementById('patternGroup');
  
  if (mode === 'minimal') {
    wordCountGroup.style.display = 'none';
    patternGroup.style.display = 'none';
  } else if (mode === 'story') {
    wordCountGroup.style.display = 'flex';
    patternGroup.style.display = 'flex';
    updatePatternOptions();
  } else {
    wordCountGroup.style.display = 'flex';
    patternGroup.style.display = 'none';
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('generate').addEventListener('click', generatePassphrase);
  document.getElementById('copy').addEventListener('click', copyToClipboard);
  
  document.getElementById('mode').addEventListener('change', () => {
    updateUIForMode();
    generatePassphrase();
  });
  
  document.getElementById('wordCount').addEventListener('change', () => {
    updatePatternOptions();
    generatePassphrase();
  });
  
  document.getElementById('pattern').addEventListener('change', generatePassphrase);
  
  // Initial UI setup
  updateUIForMode();
  
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
