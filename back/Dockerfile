# ベース
FROM ruby:3.1.4

# アプリディレクトリ（Composeファイルで指定）
ARG APP_DIR="/usr/share/nginx/html" 

# タイムゾーン設定（composeファイルの指定では変更されない）
ENV TZ=Asia/Tokyo

# パッケージ更新
RUN apt-get update -y
# 必須パッケージ
RUN apt-get install -y cron build-essential nodejs vim
# PostgreSQL接続用パッケージ
RUN apt-get install -y libpq-dev

# Railsセットアップ
RUN mkdir -p $APP_DIR
WORKDIR $APP_DIR
ADD Gemfile $APP_DIR/Gemfile
ADD Gemfile.lock $APP_DIR/Gemfile.lock
RUN bundle install

