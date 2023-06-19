FROM golang:1.20.5

RUN mkdir /backend

ADD . /backend

WORKDIR /backend

# RUN go build -o backend/main.go

CMD ["go", "run", "main.go"]
