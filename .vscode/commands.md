переименования главной ветки в проекте на main
команда инициализации локального репозитория
и привязки его к удаленному на github
первый коммит с индексации всех файлов
и его отправка в удаленный репозиторий

эту команду вы вводите один раз при начале работы с проектом


git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin <ссылка на ваш git>
git push -u origin main


при изменениях в проекте мы делаем команду

git add .
git commit -m "second commit"
git push

проверка привязки к удаленному репозиторию

git remote -v
