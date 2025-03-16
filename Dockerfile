ARG IMAGE=containers.intersystems.com/intersystems/iris-community:latest
FROM $IMAGE

WORKDIR /home/irisowner/dev

# Install vector search package
RUN --mount=type=bind,src=.,dst=. \
    iris start IRIS && \
    iris session IRIS < iris.script && \
    iris session IRIS -U %SYS '##class(%Library.SYS).Install("/usr/irissys/mgr/iriscluster")' && \
    iris stop IRIS quietly
