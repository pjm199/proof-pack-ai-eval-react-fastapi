#include <bits/stdc++.h>
using namespace std;
vector<int> dijkstra(int n, const vector<vector<pair<int,int>>>& g, int src);
int main(){ int n=5; vector<vector<pair<int,int>>> g(n);
 auto add=[&](int u,int v,int w){ g[u].push_back({v,w}); g[v].push_back({u,w}); };
 add(0,1,2); add(1,2,3); add(0,3,1); add(3,4,4); add(4,2,1);
 auto dist=dijkstra(n,g,0); vector<int> exp={0,2,6,1,5};
 for(size_t i=0;i<exp.size();++i){ if(dist[i]!=exp[i]){ cerr<<"Mismatch at "<<i<<"\n"; return 1; } }
 cout<<"OK\n"; return 0; }
