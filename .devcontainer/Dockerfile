FROM node:hydrogen-bookworm-slim
RUN apt-get update && apt-get install -y build-essential git \
    pandoc \
    texlive texlive-latex-recommended texlive-latex-extra && \
    apt-get clean autoclean && \
    apt-get autoremove -y && \
    rm -rf /var/lib/apt/lists/*
USER node
