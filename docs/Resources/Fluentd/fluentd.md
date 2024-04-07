# Fluentd Resources

https://docs.fluentd.org/

- what is the difference betweeen fluentd and td-agent
- https://docs.fluentd.org/container-deployment/docker-compose
- https://github.com/digikin/fluentd-elastic-kibana
- https://docs.fluentd.org/output/elasticsearch#user-password-optional
- https://github.com/uken/fluent-plugin-elasticsearch
- https://docs.fluentd.org/container-deployment/docker-logging-driver
- https://www.youtube.com/watch?v=5ofsNyHZwWE

i am receiving error

`<Fluent::Plugin::ElasticsearchOutput::RecoverableRequestFailure: could not push logs to Elasticsearch cluster`

- unable to authenticate user [elastic] for REST request
- https://stackoverflow.com/questions/72379789/fluentd-cannot-connect-to-elasticsearch

## Notes on how i can understand fluentd

- [ ] Step 0: run a fluentd container that echo's logs to stdout from docker containers that write their logs to stdout that are using the the fluentd log driver
- [ ] Step 1: create a VM with HTTPD server running in docker alongside fluentd running in docker in a separate. Fluentd picks up the HTTPD server docker logs and writes them to a file specifically for fluentd on the same machine.
- [ ] Step 2: Step 1, but instead of write logs to a file on the same machine, fluentd forwards them to a log file on a seperate VM
- [ ] Step 3: add multiple VMs doing Step 2 forwarding their logs to the same centralized VM for log collection
- [ ] Step 4: on the centralized VM, use fluentd to read from the centralized log file (being written to by multiple machines) then write that data to an index elastic search
