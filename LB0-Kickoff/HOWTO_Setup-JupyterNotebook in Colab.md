# **HOWTO Setup a Jupyter Notebook in Google Colab**
###### Last update: 23/8/21 dbe - final v1

## Summary  
The purpose of this Jupyter Notebook is to get you started using Python and Jupyter Notebooks for routine chemical engineering calculations. This introduction assumes this is your first exposure to Python or Jupyter notebooks.  
</br>

- **Step 0: Gain Executable Access to Jupyter Notebooks** 

Jupyter notebooks are documents that can be viewed and executed inside any modern web browser. Since you're reading this notebook, you already know how to view a Jupyter notebook. The next step is to learn how to execute computations that may be embedded in a Jupyter notebook.
</br>

To execute Python code in a notebook you will need access to a Python kernal. A kernal is simply a program that runs in the background, maintains workspace memory for variables and functions, and executes Python code. The kernal can be located on the same laptop as your web browser or located in an on-line cloud service.
</br>

Important Note Regarding Versions There are two versions of Python in widespread use. Version 2.7 released in 2010, which was the last release of the 2.x series. Version 3.5 is the most recent release of the 3.x series which represents the future direction of language. It has taken years for the major scientific libraries to complete the transition from 2.x to 3.x, but it is now safe to recommend Python 3.x for widespread use. So for this course be sure to use latest verstion, currently 3.6, of the Python language.
</br>

### Using Jupyter/Python in the Cloud\n",
The easiest way to use Jupyter notebooks is to sign up for a free or paid account on a cloud-based service such as [Wakari.io](https://www.wakari.io/) or [SageMathCloud](https://cloud.sagemath.com/). You will need continuous internet connectivity to access your work, but the advantages are there is no software to install or maintain. All you need is a modern web browser on your laptop, Chromebook, tablet or other device. Note that the free services are generally heavily oversubscribed, so you should consider a paid account to assure access during prime hours.  

There are also demonstration sites in the cloud, such as [tmpnb.org](https://tmpnb.org/). These start an interactive session where you can upload an existing notebook or create a new one from scratch. Though convenient, these sites are intended mainly for demonstration and generally quite overloaded. More significantly, there is no way to retain your work between sessions, and some python functionality is removed for security reasons.  
