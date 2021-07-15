#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { name } from '../scr/cli.js';
import games1 from '../scr/games1.js';

games1(name);
