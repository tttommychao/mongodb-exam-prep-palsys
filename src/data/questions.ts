import { parseQuestions, Question } from '../utils/parser';
import { defaultRawText } from './raw';
import { rawTextPart1 } from './raw1';
import { rawText2 } from './raw2';
import { rawText3 } from './raw3';
import { rawText4 } from './raw4';
import { rawText5 } from './raw5';
import { rawText6 } from './raw6';

const fullRawText = [
  defaultRawText,
  rawTextPart1,
  rawText2,
  rawText3,
  rawText4,
  rawText5,
  rawText6
].join('\n=\n');

export const allQuestions: Question[] = parseQuestions(fullRawText);
