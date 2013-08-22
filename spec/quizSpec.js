//      ___       _______      ___       __  .__   __.  ______    __
//     /   \     /  _____|    /   \     |  | |  \ |  | |      \  |  |
//    /  ^  \   |  |  __     /  ^  \    |  | |   \|  | `----)  | |  |
//   /  /_\  \  |  | |_ |   /  /_\  \   |  | |  . `  |     /  /  |  |
//  /  _____  \ |  |__| |  /  _____  \  |  | |  |\   |    |__|   |__|
// /__/     \__\ \______| /__/     \__\ |__| |__| \__|     __    (__)
//                                                        (__)
// http://pivotal.github.io/jasmine/

// The first question's tests are written.
// See quiz.js for more details

describe('question1', function() {

  it('returns true if today is saturday or sunday', function() {
    // Assuming you're taking this on a weekday!
    expect(quiz.sleepIn()).toBe(false);
  });

  it('returns true if an options hash is passed with vacation set to true', function() {
    expect(quiz.sleepIn({vacation: true})).toBe(true);
  });

});

describe('question2', function() {

  it('returns true if the number is between 90 and 99', function() {
    expect(quiz.nearHundred(52)).toBe(false);
  });

  it('returns false if the number is below 90', function() {
    expect(quiz.nearHundred(93)).toBe(true);
  });

  it('throws an error if the num is not a number', function() {
    expect(function() {quiz.nearHundred('two');}).toThrow(new Error("Please enter a number!"));
  });

});

describe('question3', function() {

  it('returns the word with the letter removed at the specified index', function() {
    expect(quiz.missingChar("kitten", 1)).toEqual("ktten");
  });

  it('throws an error if the word is not a string', function() {
    expect(function() {quiz.missingChar(347, 1);}).toThrow(new Error("Please enter a string!"));
  });

});

describe('question4', function() {

  it('returns the word with the substring "del" removed', function() {
    expect(quiz.delDel("abdelcd")).toEqual("abcd");
  });

  it('returns the same word if it does not contain the substring "del"', function() {
    expect(quiz.delDel("xyz")).toEqual("xyz");
  });

});

describe('question5', function() {

  it('returns the word with the last letter in the front', function() {
    expect(quiz.backAround("hello")).toEqual("ohell");
  });

});








