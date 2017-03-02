FROM fedora:latest

ENV container docker

RUN dnf -y install git gcc-c++ make
RUN curl -sL https://rpm.nodesource.com/setup_6.x | bash -
RUN dnf -y install nodejs && \
  npm install -g webpack yarn && \
  dnf -y install yum-utils

CMD [ "/usr/bin/bash" ]
