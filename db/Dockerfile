FROM postgres:16.3

# タイムゾーン設定（composeファイルの指定では変更されない）
ENV TZ=Asia/Tokyo
ENV LANG=ja_JP.UTF-8

# タイムゾーン設定（Asia/Tokyoに対応させるためライブラリインストール）
RUN apt-get install -y tzdata
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
