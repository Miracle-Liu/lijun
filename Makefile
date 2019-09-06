lj:
	rsync -avC --progress --exclude=node_modules/  ./dist/ root@182.61.136.172:/var/www/xtlj
	echo "upload 182.61.136.172 over"