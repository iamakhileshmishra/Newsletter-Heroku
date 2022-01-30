#include<bits/stdc++.h>
using namespace std;

//------personal macro decelaration------
#define ll long long 
#define tc ll t=1;cin>>t;while(t--)
#define pi 3.14159265358979323846
//------code begin from here------
//Rating girne se darne ka nahi


int main()
{
  ios::sync_with_stdio(false); 
  cin.tie(NULL);
    
  tc{
      int n,first=0,second=0;
      cin >> n;
      int a[n],b[n];
      for (int i = 0; i < n;i++)
          cin >> a[i];
      for (int i = 0; i < n;i++)
          cin >> b[i];
      sort(a, a + n);
      sort(b, b + n);
       first = max(a[n - 1],b[n-1]);
      if(first==a[n-1])
      {
           second = b[n - 2];
          
      }
      else
         second = a[n - 2];
      cout << first * second << endl;
  }
  return 0;
}