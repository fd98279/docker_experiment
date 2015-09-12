#!/bin/bash
docker_container_up=$(docker ps | grep sampatp-node-hello | grep Up | wc -l)
if [ $docker_container_up -eq 1 ]
then 
  echo "Success: Docker container is up"
else
  echo -e "Fail: Docker container is not up"
fi

fib10=$(curl -s localhost:49160/fib/10)
expected_fib10="Fibonacci series for num (10):1,1,2,3,5,8,13,21,34,55"
if [ "$fib10" ==  "$expected_fib10" ];
then
  echo "Success: Fib 10 matches expected fib 10"
else
  echo -e "Fail: Fib 10 does not match with expected fib 10"
fi

Services_takes_numbers_only=$(curl -s localhost:49160/fib/y)
expected_service_takes_numbers_only="Input should be a number"
if [ "$Services_takes_numbers_only" ==  "$expected_service_takes_numbers_only" ];
then
  echo "Success: Service accepts only numbers as input"
else
  echo -e "Fail: Service accepts inputs other than numbers"
fi


