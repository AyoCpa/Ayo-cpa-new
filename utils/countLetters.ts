export const countLetters = (text: string, lettersNo: number) => {
  return text.slice(0, lettersNo) + "...";
};

export const countWords = (text: string , wordsNo: number) => {
    return (text.split(" " , 30).join(' '))
    
}
