export interface Option {
  id: string;
  rawIndicator: string;
  text: string;
  isCorrect: boolean;
  explanation: string;
  hasStatus: boolean;
}

export interface Question {
  id: string;
  category: string;
  text: string;
  options: Option[];
  isMultipleChoice: boolean;
}

export function parseQuestions(rawText: string): Question[] {
  const questions: Question[] = [];
  const blocks = rawText.split('\n=\n').map(b => b.trim()).filter(b => b.length > 0);
  
  let currentCategory = 'General';
  
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];
    let lines = block.split('\n').map(l => l.trim());
    
    if (lines[0].startsWith('【') && lines[0].endsWith('】')) {
      currentCategory = lines[0].slice(1, -1);
      lines.shift();
    }
    
    let textLines = [];
    let options: Option[] = [];
    let currentOption: any = null;
    let parsingOptions = false;
    
    for (let j = 0; j < lines.length; j++) {
      const line = lines[j];
      const isOptionIndicator = /^(a\.|b\.|c\.|d\.|e\.|A\.|B\.|C\.|D\.|E\.|Option [A-E]\.)/.test(line) || line === 'a.' || line === 'A.';
      
      if (isOptionIndicator) {
        parsingOptions = true;
        if (currentOption) {
          options.push(currentOption);
        }
        currentOption = {
          id: `opt_${j}`,
          rawIndicator: line.match(/^(a\.|b\.|c\.|d\.|e\.|A\.|B\.|C\.|D\.|E\.|Option [A-E]\.)/)?.[0] || line,
          text: line.replace(/^(a\.|b\.|c\.|d\.|e\.|A\.|B\.|C\.|D\.|E\.|Option [A-E]\.)\s*/i, '').trim(),
          isCorrect: false,
          explanation: '',
          hasStatus: false
        };
      } else if (parsingOptions && currentOption) {
        if (/^Correct\.?|^Correct!/i.test(line)) {
          currentOption.isCorrect = true;
          currentOption.hasStatus = true;
        } else if (/^Incorrect\.?|^Incorrect/i.test(line)) {
          currentOption.isCorrect = false;
          currentOption.hasStatus = true;
        } else {
          if (currentOption.hasStatus) {
            currentOption.explanation += (currentOption.explanation ? '\n' : '') + line;
          } else {
            currentOption.text += (currentOption.text ? '\n' : '') + line;
          }
        }
      } else {
        textLines.push(line);
      }
    }
    if (currentOption) options.push(currentOption);
    
    const validOptions = options.filter(o => o.hasStatus);
    const invalidOptions = options.filter(o => !o.hasStatus);
    
    let finalQuestionText = textLines.join('\n');
    invalidOptions.forEach(inv => {
      finalQuestionText += '\n' + inv.rawIndicator + ' ' + inv.text;
    });
    
    if (validOptions.length > 0) {
      questions.push({
        id: `q_${i}`,
        category: currentCategory,
        text: finalQuestionText,
        options: validOptions,
        isMultipleChoice: finalQuestionText.includes('Select all that apply') || validOptions.filter(o => o.isCorrect).length > 1
      });
    }
  }
  
  return questions;
}
