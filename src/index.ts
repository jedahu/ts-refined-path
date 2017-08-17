// #+TITLE: Refinements for paths

import * as p from "path";
import {Nil} from "ts-refined";
import {Refined} from "ts-refined";
import {Refinement} from "ts-refined";
import {Tagged} from "ts-refined";


// ** Tags

export class FPath extends Tagged<string> {
    "@nominal" : "de222c7d-3565-435e-9bfc-1750a7d07838";
}

export class Dir extends Tagged<string> {
    "@nominal" : "c9174b4e-a8c1-48b3-adfb-c84341137f1a";
}

export class File extends Tagged<string> {
    "@nominal" : "6b7615c1-5d02-4e1a-9921-381fa3a8585e";
}


// ** Refinements

export class Abs implements Refinement<string> {
    "@nominal" : "1a88d9e9-522c-4de1-96c0-7e5257705ca4";
    test = (s : string) => p.isAbsolute(s);
}

export class Rel implements Refinement<string> {
    "@nominal" : "5bed8e96-5562-444c-b42a-9bcb35a77448";
    test = (s : string) => !p.isAbsolute(s);
}


// ** Helper types

export type Path<A = Nil> = Refined<string, FPath & A>;


// ** Retyped path functions


export const basename : <A>(s : Path<A>, ext? : string) => Path<A> = p.basename as any;

export const dirname : <A>(s : Path<File & A> | Path<A>) => Path<A> = p.dirname as any;

export const extname : (s : Path) => string = p.extname;

export const format : (o : p.ParsedPath) => Path = p.format as any;

export const isAbsolute : <A>(s : Path<A>) => s is Path<Abs & A> = p.isAbsolute as any;

export const join : <A extends Abs | Rel | Nil>(s : Path<A>, ...ss : Array<Path>) => Path<A> = p.join as any;

export const normalize : <A>(s : Path<A>) => Path<A> = p.normalize as any;

export const parse : (s : Path) => p.ParsedPath = p.parse;

export const relative : (from : Path, to : Path) => Path = p.relative as any;

export const resolve : (...ss : Array<Path>) => Path<Abs> = p.resolve as any;

export {delimiter, posix, sep, win32} from "path";
