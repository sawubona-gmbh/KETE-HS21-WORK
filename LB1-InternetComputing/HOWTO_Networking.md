## HOWTO Networking - Some Examples
##### Last update: 27/9/21 dbe

## Background
A world of possibilities is opened to us through the internet and it can be accessed by connecting our devices to it. Without storing the information on the device permanently, we can access the information whenever necessary. The communication with others has become easier and it allows us to organize projects and work together. Networks are formed through the connected device and they run our lives. But such connections also leave our system vulnerable to damage and theft of information is possible. This problem can be solved using cybersecurity and network security and hence it is necessary to understand basic concepts of network security.  
See [EDUCBA-Network Security Tutorial](https://www.educba.com/software-development/software-development-tutorials/network-security-tutorial/) for many more information and examples on this topic.


## Networking Commands 
The operating system consists of various built-in, command-line networking utilities that are used for network troubleshooting. You will find various networking commands examples which are most essentials for a network administrator.

### Some Networking Command Examples
* Ping  
Ping is used to testing a network host capacity to interact with another host. Just enter the command Ping, followed by the target host’s name or IP address. The ping utilities seem to be the most common network tool. This is performed by using the Internet Control Message Protocol, which allows the echo packet to be sent to the destination host and a listening mechanism. If the destination host reply to the requesting host, that means the host is reachable. This utility usually gives a basic image of where there may be a specific networking issue.  
```
ping example.com
ping google.ch
```  

* Save URL/URI output to file
```
curl example.com > saved-example.html
```  

* Show request and response header
```
curl -v example.com
```  

* Display only response header
```
curl --head example.com
```  

* Download file from FTP Server
```
curl -u user:password -O ftp://yourftpurl/index.html
```  

See https://www.booleanworld.com/curl-command-tutorial-examples/ for more examples


