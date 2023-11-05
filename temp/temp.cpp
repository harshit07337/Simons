//{ Driver Code Starts
#include<bits/stdc++.h>
using namespace std;

// } Driver Code Ends
class Solution {
public:

    bool issafe(int x,int y,vector<vector<char>>b){
        int n=b.size();int p=b[0].size();
        if(x<n&&y<p&&x>=0&&y>=0)return true;
        else return false;
    }
    string fun(vector<vector<char>>b,string w,int i,string t,int x,int y,vector<vector<int>>vis){
          if(issafe(x,y,b)&&vis[x][y]==0){
              if(w==t)return t;
            vis[x][y]=1;
           // cout<<y<<endl;
            if(i<w.size()&&b[x][y]==w[i]) {t+=w[i];i++;}
            fun(b,w,i,t,x+1,y,vis);fun(b,w,i,t,x,y+1,vis);
        }
    }
    bool isWordExist(vector<vector<char>>& board, string word) {
        // Code here
        string t;
        vector<vector<int>>vis(board.size(),vector<int>(board[0].size(),0));
       fun(board,word,0,t,0,0,vis);
    }
};
int main(){
	int tc;
	cin >> tc;
	while(tc--){
		int n, m;
		cin >> n >> m;
		vector<vector<char>>board(n, vector<char>(m, '*'));
		for(int i = 0; i < n; i++)
			for(int j = 0; j < m; j++)
				cin >> board[i][j];
		string word;
		cin >> word;
		Solution obj;
		bool ans = obj.isWordExist(board, word);
		if(ans)
			cout << "1\n";
		else cout << "0\n";
	}
	return 0;
}
// } Driver Code Ends