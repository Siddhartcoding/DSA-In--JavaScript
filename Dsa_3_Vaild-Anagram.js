//Ques 3 - Vaild Anagram
// An nagram is word or phrase formed  by  rearranging the letters of
// a different word or phrase, using all the original letters exactly once.

// Input (s= "anagram"), (t= "nagram"); ----->>>>>> Output : true;
// Input (s= "rat"), (t="car")---------->>>>>Output: false;

//1st approach
const isAnagram = function (s, t) {
  s = s.split("").sort().join("");
  t = t.split("").sort().join("");

  return s === t;
};

//2nd approach
const isAnagram2 = function (s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[s[t]] || 0) + 1;
  }
  for (const key in obj1) {
    if (obj1[key] !== obj2[kry]) return false;
  }
  return true;
};
