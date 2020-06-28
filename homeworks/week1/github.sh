#!/bin/bash
ID=$1
curl https://api.github.com/users/"$ID" > result.txt
cat result.txt | grep '\<name\>' | cut -d \" -f 4
cat result.txt | grep '\<location\>' | cut -d \" -f 4
cat result.txt | grep '\<bio\>' | cut -d \" -f 4
cat result.txt | grep '\<blog\>' | cut -d \" -f 4
