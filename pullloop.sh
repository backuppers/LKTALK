
while true;
do
  git remote update
  local=$(git rev-parse HEAD)
  target=$(git rev-parse origin)
  if [ $local != $target ]; then
    git pull
    echo pulling now $(date)
  fi
  echo waiting 10 sec...
  sleep 10;
done