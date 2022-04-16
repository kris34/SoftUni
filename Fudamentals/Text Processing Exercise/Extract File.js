function files(string) {
  string = string.split("\\");
  let lastElement = string[string.length - 1].split(" ");
  type = [];
  fileName = []
  for (let token of lastElement) {
    token = token.split(".");
    let index = token.length - 1;
    type.push(token.splice(index, 1));
    fileName.push(token)
  }
  console.log(`File name: ${fileName[0].join(".")}`);
  console.log(`File extension: ${type[0].join("")}`);
}
files('C:\\Projects\\Data-Structures\\LinkedList.cs');
