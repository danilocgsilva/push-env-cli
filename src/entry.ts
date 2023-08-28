import ArgumentParser from "./ArgumentsParser"
import ArgumentsAdapter from "./ArgumentsAdapter";
import GenerateFiles from "./GenerateFiles";

const args = ArgumentParser.getArgs();
const argumentsAdapter = new ArgumentsAdapter(args)
const filesToGenerate = argumentsAdapter.getFiles()
GenerateFiles.generate(filesToGenerate)

console.log(args.name)
