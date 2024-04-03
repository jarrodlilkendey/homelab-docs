# Elastic Search Resources

## Udemy Course

https://www.udemy.com/course/elasticsearch-complete-guide

## Terms

- Node: a running instance of Elastic Search, it stores the data that we add to Elastic Search
- Cluster: a collection of nodes
- Document: data is stored in Elastic Search as documents, which are JSON objects
- Index: documents are grouped together using indices

## How to Query Elastic Search

- Kibana UI in Dev Tools
- CURL
- API request

## Sharding

Useful for when you have an index that is too large to be stored on a single Node. You can split an index into 2 or more Shards that are split between multiple Nodes.

Each shard in Elastic Search is an Apache Lucene index.

A shard may store up to about 2 billion documents.

Search query performance can be improved with shards by running parallel queries across mulitple nodes.

The default amount of shards for an index is 1. This can be increased or decreased using the Split API or the Shrink API.

## Replication

- Replication is used to ensure high availability for indices
- A side benefit is increased query throughput
- Replciation works by copying a given shard's data
- A replica shared is never stored on the same node as it's primary shard
- Replicate shards once if your system isn't critical; replicate at least twice if your system is mission critical
- Snapshots can be taken as backups of specific indices, or the whole cluster

## Docker Compose Elastic Search

Sourced from GitHub https://github.com/elastic/elasticsearch/tree/8.13/docs/reference/setup/install/docker

Found in the elastic stack docs https://github.com/elastic/elasticsearch/tree/8.13/docs/reference/setup/install/docker

## Virtual Memory Configuration

https://www.elastic.co/guide/en/elasticsearch/reference/current/vm-max-map-count.html
