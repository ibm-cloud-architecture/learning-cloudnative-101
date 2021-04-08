#!/bin/bash

jobs=( $(kubectl get jobs --no-headers -o custom-columns=":metadata.name") )
echo -e "Job \t\t\t\t Pod \t\t\t\t\tLog"
for job in "${jobs[@]}"
do
   pod=$(kubectl get pods -l job-name=$job --no-headers -o custom-columns=":metadata.name")
   echo -en "$job \t $pod \t"
   kubectl logs $pod
done
