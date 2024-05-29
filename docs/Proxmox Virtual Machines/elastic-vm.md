# Elastic Virtual Machine

Virtual machine for hosting the centralized logging infrastructure.

- IP address: 10.0.0.9

## Kibana

- URL: http://10.0.0.9:5601
- Username: elastic
- Password: changeme

## Log Ingestion Process

How are the logs getting ingested into the Elastic Search cluster?

- fluentd is running in a docker container on the Elastic Virtual Machine
- On the Elastic Virtual Machine the fluentd is listening for logs on port 24224 and forwards them to the Elastic Search hosts
- See the fluentd configuration in the homelab-gitops repo in `/docker-compose/elastic-search/fluentd/conf/fluent.conf`
- A fluentd logging driver is setup in the docker compose files for the various services running on the other virtual machines
- The fluentd logging driver will forward the logs to the remote machine of the Elastic Virtual Machine on port 24224
