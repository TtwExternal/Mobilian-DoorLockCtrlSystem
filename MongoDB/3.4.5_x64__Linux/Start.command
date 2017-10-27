#!/bin/sh
cd $(dirname $0)

echo "Kill process..."
pid=`lsof -i TCP:59320 | awk '/LISTEN/ {print $2}'`
if test -z "$pid"
then
	echo "Not running process!"
else
	echo "pid=$pid"
	kill -9 $pid
	echo "Kill process complete!"
fi

echo "Remove log files..."
rm -rf ./Log/Mobilian/0/*
echo "Remove complete!"

ulimit -n 2048 && ../../../Development-Binary-Linux-Ubuntu/Binary/MongoDB/mongod --config ./Config/Mobilian/0.conf
