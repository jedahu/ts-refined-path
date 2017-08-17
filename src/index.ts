// #+TITLE: Refinements for paths

import {Refinement, Tagged} from "ts-refined";
import * as p from "path";


// ** Tags

export class Path extends Tagged<string> {
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
