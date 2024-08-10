# ベース
FROM ruby:3.3.4

# アプリディレクトリ（Composeファイルで指定）
ARG APP_DIR

# タイムゾーン設定（composeファイルの指定では変更されない）
ENV TZ=Asia/Tokyo
ENV LANG=ja_JP.UTF-8

# パッケージ更新
RUN apt-get update -y
# 必須パッケージ
RUN apt-get install -y cron build-essential nodejs vim libpq-dev git libvips pkg-config

# Railsセットアップ
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
ADD Gemfile $APP_DIR/Gemfile
ADD Gemfile.lock $APP_DIR/Gemfile.lock
RUN bundle config set path vendor/bundle # Gemライブラリのインストール先の指定
RUN bundle install
