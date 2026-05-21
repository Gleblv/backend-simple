import * as path from "path";
import * as uuid from "uuid";
import * as fs from "fs";

class FileService {
  async write(file) {
    try {
      const fileName = uuid.v4() + ".svg";
      const filePath = path.resolve("public", fileName);

      file.mv(filePath);

      return fileName;
    } catch (err) {
      console.log(err);
    }
  }
}

export default new FileService();
