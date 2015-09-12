# docker_experiment
NodeJS with Docker

Pre Reqs:
The linux system should have docker installed and running.
Install ubuntu using vbox/vagrant: vagrant init ubuntu/trusty64; vagrant up --provider virtualbox
Install docker: https://docs.docker.com/installation/ubuntulinux/

To build and run:
./build_and_run.sh

Sample usage:
curl -s localhost:49160/fib/10
curl -s localhost:49160/fib/6
curl -s localhost:49160/fib/y
curl -s localhost:49160/fib/-1

Tests:
./tests.sh
