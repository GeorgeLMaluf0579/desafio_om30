FROM ruby:3.1.2-alpine

RUN gem install bundler -v2.3.22
RUN apk --update add --virtual build-dependencies build-base postgresql-dev linux-headers libsass-dev
RUN apk --update add libpq bash libxml2 libxml2-dev libxml2-utils libxslt openssl zlib git \
                     libc6-compat gcompat libass netcat-openbsd less shared-mime-info tzdata
RUN mkdir /back
WORKDIR /back
ADD Gemfile /back/
ADD Gemfile.lock /back/
RUN bundle install
ADD . /back/
COPY ./scripts/entrypoint.sh /usr/bin/entrypoint.sh
RUN chmod +x /usr/bin/entrypoint.sh