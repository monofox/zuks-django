# ZUKS Website based on the Django Framework
The official website of the ZUKS project. (www.zuks.org)

## Installation
- Create a new python 2.x environment with `virtualenv venv-folder` _(optional)_
- Switch to the new environment with `source venv-folder/bin/activate` _(optional)_
- Change to the root directory of the project
- Configure the `BASE_URL` option in the `zuks/settings.py` properly
- Configure the database settings in the `zuks/settings.py` _(optional)_
- Execute `pip install -r requirements.txt`
- Execute `python manage.py syncdb`
- Execute `python manage.py collectstatic`
- Configure the webserver to deliver all files from the url `/static/*` from the `/static` folder _(optional when using the integrated web server `python manage.py runserver`)_
- Install and configure [django-sentry](https://sentry.readthedocs.org/en/v1.13.5/install/index.html) to track application errors _(optional)_
- Configure a hook that executes `python manage.py cleandb` periodically _(optional)_
