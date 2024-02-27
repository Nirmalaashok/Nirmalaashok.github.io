import fs from "fs";
 
export const getUsers = () => {
    try { const result = fs.readFileSync("../src/Data/users.json");
      return JSON.parse(result);
    } catch (error) {
      return [];
    }
  };
  
    export const getPosts = () => {
    try {
      const result = fs.readFileSync("../src/Data/post.json" );
      return JSON.parse(result);
    } catch (error) {
      return [];
    }
  };
  
  