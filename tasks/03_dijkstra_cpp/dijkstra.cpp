#include <bits/stdc++.h>
using namespace std;
vector<int> dijkstra(int n, const vector<vector<pair<int,int>>>& g, int src){
    const int INF=INT_MAX; vector<int> dist(n, INF); dist[src]=0;
    using P=pair<int,int>; priority_queue<P, vector<P>, greater<P>> pq; pq.push({0,src});
    while(!pq.empty()){ auto [d,u]=pq.top(); pq.pop(); if(d!=dist[u]) continue;
        for(auto [v,w]: g[u]) if(dist[u]!=INF && dist[u]+w<dist[v]){ dist[v]=dist[u]+w; pq.push({dist[v],v}); }}
    return dist;
}
