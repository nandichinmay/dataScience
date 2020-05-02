# swifter
A package which efficiently applies any function to a pandas dataframe or series in the fastest available manner.

[![PyPI version](https://badge.fury.io/py/swifter.svg)](https://badge.fury.io/py/swifter)

## Installation:
```
$ pip install swifter # first time installation
```
...after installing, import `swifter` into your code along with `pandas` using:
```python
import pandas as pd
import swifter
```
Further documentations on swifter is available [here](docs/documentation.md).

## Notes
1. Please upgrade your version of pandas, as the pandas extension api used in this module is a recent addition to pandas.

2. Do not use swifter to apply a function that modifies external variables. Under the hood, swifter does sample applies to optimize performance. These sample applies will modify the external variable in addition to the final apply. Thus, you will end up with an erroneously modified external variable.

3. It is advised to disable the progress bar if calling swifter from a forked process as the progress bar may get confused between various multiprocessing modules. 


## For more check out its git repository:
   [![Git] https://github.com/jmcarpenter2/swifter
