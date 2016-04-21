const createHash = Npm.require('crypto').createHash;

FileMixin = {
  id() {
    let hash = createHash('sha1');
    let path = this.getPathInPackage();
    let fileHash = this.getSourceHash();
    let fileId = hash.update(path + fileHash).digest('hex');
    return fileId;
  },

  warn(error) {
    console.log(`${error.sourcePath} (${error.line}, ${error.column}): ${error.message}`);
  },

  isBare() {
    let fileOptions = this.getFileOptions();
    return fileOptions && fileOptions.bare;
  },

  // Get root app config.
  isConfig() {
    return this.getPathInPackage() === 'tsconfig.json';
  },

  isDeclaration() {
    return TypeScript.isDeclarationFile(this.getBasename());
  },

  // Get path with package prefix if any.
  getPackagePrefixPath() {
    let packageName = this.getPackageName();
    packageName = packageName ?
      (packageName.replace(':', '_') + '/') : '';
    let inputFilePath = this.getPathInPackage();
    return packageName + inputFilePath;
  },

  getES6ModuleName() {
    let packaged = this.getPackagePrefixPath();
    return TypeScript.removeTsExt(packaged);
  }
};
