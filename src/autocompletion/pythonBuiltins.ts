export const builtinFunctions = 
{
    "ArithmeticError": "Base class for arithmetic errors.\n",
    "AssertionError": "Assertion failed.\n",
    "AttributeError": "Attribute not found.\n",
    "BaseException": "Common base class for all exceptions\n",
    "BlockingIOError": "I/O operation would block.\n",
    "BrokenPipeError": "Broken pipe.\n",
    "BufferError": "Buffer error.\n",
    "BytesWarning": "Base class for warnings about bytes and buffer related problems, mostly\nrelated to conversion from str or comparing to str.\n",
    "ChildProcessError": "Child process error.\n",
    "ConnectionAbortedError": "Connection aborted.\n",
    "ConnectionError": "Connection error.\n",
    "ConnectionRefusedError": "Connection refused.\n",
    "ConnectionResetError": "Connection reset.\n",
    "DeprecationWarning": "Base class for warnings about deprecated features.\n",
    "EOFError": "Read beyond end of file.\n",
    "Ellipsis": "No documentation available",
    "EnvironmentError": "Base class for I/O related errors.\n",
    "Exception": "Common base class for all non-exit exceptions.\n",
    "False": "Built-in value",
    "FileExistsError": "File already exists.\n",
    "FileNotFoundError": "File not found.\n",
    "FloatingPointError": "Floating point operation failed.\n",
    "FutureWarning": "Base class for warnings about constructs that will change semantically\nin the future.\n",
    "GeneratorExit": "Request that a generator exit.\n",
    "IOError": "Base class for I/O related errors.\n",
    "ImportError": "Import cannot find module, or cannot find name in module.\n",
    "ImportWarning": "Base class for warnings about probable mistakes in module imports\n",
    "IndentationError": "Improper indentation.\n",
    "IndexError": "Sequence index out of range.\n",
    "InterruptedError": "Interrupted by signal.\n",
    "IsADirectoryError": "Operation does not work on directories.\n",
    "KeyError": "Mapping key not found.\n",
    "KeyboardInterrupt": "Program interrupted by user.\n",
    "LookupError": "Base class for lookup errors.\n",
    "MemoryError": "Out of memory.\n",
    "ModuleNotFoundError": "No documentation available",
    "NameError": "Name not found globally.\n",
    "None": "Built-in value",
    "NotADirectoryError": "Operation only works on directories.\n",
    "NotImplemented": "No documentation available",
    "NotImplementedError": "Method or function has not been implemented yet.\n",
    "OSError": "Base class for I/O related errors.\n",
    "OverflowError": "Result too large to be represented.\n",
    "PendingDeprecationWarning": "Base class for warnings about features which will be deprecated\nin the future.\n",
    "PermissionError": "Not enough permissions.\n",
    "ProcessLookupError": "Process not found.\n",
    "RecursionError": "No documentation available",
    "ReferenceError": "Weak ref proxy used after referent went away.\n",
    "ResourceWarning": "Base class for warnings about resource usage.\n",
    "RuntimeError": "Unspecified run-time error.\n",
    "RuntimeWarning": "Base class for warnings about dubious runtime behavior.\n",
    "StopAsyncIteration": "No documentation available",
    "StopIteration": "Signal the end from iterator.__next__().\n",
    "SyntaxError": "Invalid syntax.\n",
    "SyntaxWarning": "Base class for warnings about dubious syntax.\n",
    "SystemError": "Internal error in the Python interpreter.\n\nPlease report this to the Python maintainer, along with the traceback,\nthe Python version, and the hardware/OS platform and version.\n",
    "SystemExit": "Request to exit from the interpreter.\n",
    "TabError": "Improper mixture of spaces and tabs.\n",
    "TimeoutError": "Timeout expired.\n",
    "True": "Type of bool",
    "TypeError": "Inappropriate argument type.\n",
    "UnboundLocalError": "Local name referenced but not bound to a value.\n",
    "UnicodeDecodeError": "Unicode decoding error.\n",
    "UnicodeEncodeError": "Unicode encoding error.\n",
    "UnicodeError": "Unicode related error.\n",
    "UnicodeTranslateError": "Unicode translation error.\n",
    "UnicodeWarning": "Base class for warnings about Unicode related problems, mostly\nrelated to conversion problems.\n",
    "UserWarning": "Base class for warnings generated by user code.\n",
    "VMSError": "No documentation available",
    "ValueError": "Inappropriate argument value (of correct type).\n",
    "Warning": "Base class for warning categories.\n",
    "WindowsError": "Base class for I/O related errors.\n",
    "ZeroDivisionError": "Second argument to a division or modulo operation was zero.\n",
    "abs": "abs(number) -> number\n\nReturn the absolute value of the argument.\n",
    "all": "all(iterable) -> bool\n\nReturn True if bool(x) is True for all values x in the iterable.\nIf the iterable is empty, return True.\n",
    "any": "any(iterable) -> bool\n\nReturn True if bool(x) is True for any x in the iterable.\nIf the iterable is empty, return False.\n",
    "ascii": "ascii(object) -> string\n\nAs repr(), return a string containing a printable representation of an\nobject, but escape the non-ASCII characters in the string returned by\nrepr() using \\x, \\u or \\U escapes.  This generates a string similar\nto that returned by repr() in Python 2.\n",
    "bin": "bin(number) -> string\n\nReturn the binary representation of an integer.\n\n   >>> bin(2796202)\n    0b1010101010101010101010 \n\n",
    "bool": "bool(x) -> bool\n\nReturns True when the argument x is true, False otherwise.\nThe builtins True and False are the only two instances of the class bool.\nThe class bool is a subclass of the class int, and cannot be subclassed.\n",
    "breakpoint": "Help on built-in function breakpoint in module builtins:\nbreakpoint(...)\nbreakpoint(*args, **kws)\n\nCall sys.breakpointhook(*args, **kws).  sys.breakpointhook() must accept\nwhatever arguments are passed.\n\nBy default, this drops you into the pdb debugger.",
    "bytearray": "bytearray(iterable_of_ints) -> bytearray\nbytearray(string, encoding[, errors]) -> bytearray\nbytearray(bytes_or_buffer) -> mutable copy of bytes_or_buffer\nbytearray(int) -> bytes array of size given by the parameter initialized with null bytes\nbytearray() -> empty bytes array\n\nConstruct an mutable bytearray object from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - a bytes or a buffer object\n  - any object implementing the buffer API.\n  - an integer\n",
    "bytes": "bytes(iterable_of_ints) -> bytes\nbytes(string, encoding[, errors]) -> bytes\nbytes(bytes_or_buffer) -> immutable copy of bytes_or_buffer\nbytes(int) -> bytes object of size given by the parameter initialized with null bytes\nbytes() -> empty bytes object\n\nConstruct an immutable array of bytes from:\n  - an iterable yielding integers in range(256)\n  - a text string encoded using the specified encoding\n  - any object implementing the buffer API.\n  - an integer\n",
    "callable": "callable(object) -> bool\n\nReturn whether the object is callable (i.e., some kind of function).\nNote that classes are callable, as are instances of classes with a\n__call__() method.\n",
    "chr": "chr(i) -> Unicode character\n\nReturn a Unicode string of one character with ordinal i; 0 <= i <= 0x10ffff.\n",
    "classmethod": "classmethod(function) -> method\n\nConvert a function to be a class method.\n\nA class method receives the class as implicit first argument,\njust like an instance method receives the instance.\nTo declare a class method, use this idiom:\n\n  class C:\n      def f(cls, arg1, arg2, ...)': ...\n      f = classmethod(f)\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()).  The instance is ignored except for its class.\nIf a class method is called for a derived class, the derived class\nobject is passed as the implied first argument.\n\nClass methods are different than C++ or Java static methods.\nIf you want those, see the staticmethod builtin.\n",
    "compile": "compile(source, filename, mode[, flags[, dont_inherit]]) -> code object\n\nCompile the source (a Python module, statement or expression)\ninto a code object that can be executed by exec() or eval().\nThe filename will be used for run-time error messages.\nThe mode must be  exec  to compile a module,  single  to compile a\nsingle (interactive) statement, or  eval  to compile an expression.\nThe flags argument, if present, controls which future statements influence\nthe compilation of the code.\nThe dont_inherit argument, if non-zero, stops the compilation inheriting\nthe effects of any future statements in effect in the code calling\ncompile; if absent or zero these statements do influence the compilation,\nin addition to any features explicitly specified.\n",
    "complex": "complex(real[, imag]) -> complex number\n\nCreate a complex number from a real part and an optional imaginary part.\nThis is equivalent to (real + imag*1j) where imag defaults to 0.\n",
    "delattr": "delattr(object, name)\n\nDelete a named attribute on an object; delattr(x,  y ) is equivalent to\n``del x.y  .\n",
    "dict": "dict() -> new empty dictionary\ndict(mapping) -> new dictionary initialized from a mapping object s\n    (key, value) pairs\ndict(iterable) -> new dictionary initialized as if via:\n    d = {}\n    for k, v in iterable:\n        d[k] = v\ndict(**kwargs) -> new dictionary initialized with the name=value pairs\n    in the keyword argument list.  For example:  dict(one=1, two=2)\n",
    "dir": "dir([object]) -> list of strings\n\nIf called without an argument, return the names in the current scope.\nElse, return an alphabetized list of names comprising (some of) the attributes\nof the given object, and of attributes reachable from it.\nIf the object supplies a method named __dir__, it will be used; otherwise\nthe default dir() logic is used and returns:\n  for a module object: the module s attributes.\n  for a class object:  its attributes, and recursively the attributes\n    of its bases.\n  for any other object: its attributes, its class s attributes, and\n    recursively the attributes of its class s base classes.\n",
    "divmod": "divmod(x, y) -> (div, mod)\n\nReturn the tuple ((x-x%y)/y, x%y).  Invariant: div*y + mod == x.\n",
    "enumerate": "enumerate(iterable[, start]) -> iterator for index, value of iterable\n\nReturn an enumerate object.  iterable must be another object that supports\niteration.  The enumerate object yields pairs containing a count (from\nstart, which defaults to zero) and a value yielded by the iterable argument.\nenumerate is useful for obtaining an indexed list:\n    (0, seq[0]), (1, seq[1]), (2, seq[2]), ...\n",
    "eval": "No documentation available",
    "exec": "exec(object[, globals[, locals]])\n\nRead and execute code from an object, which can be a string or a code\nobject.\nThe globals and locals are dictionaries, defaulting to the current\nglobals and locals.  If only globals is given, locals defaults to it.\n",
    "exit": "No documentation available",
    "filter": "filter(function or None, iterable) --> filter object\n\nReturn an iterator yielding those items of iterable for which function(item)\nis true. If function is None, return the items that are true.\n",
    "float": "float(x) -> floating point number\n\nConvert a string or number to a floating point number, if possible.\n",
    "format": "format(value[, format_spec]) -> string\n\nReturns value.__format__(format_spec)\nformat_spec defaults to   \n",
    "frozenset": "frozenset()-> empty frozenset object\nfrozenset(iterable)-> frozenset object\n\nBuild an immutable unordered collection of unique elements.\n",
    "getattr": "getattr(object,name[,default])-> value\n\nGet a named attribute from an object;getattr(x, y )is equivalent to x.y.\nWhen a default argument is given,it is returned when the attribute does not\nexist; without it, an exception is raised in that case.\n",
    "globals": "globals() -> dictionary\n\nReturn the dictionary containing the current scope s global variables.\n",
    "hasattr": "hasattr(object,name)-> bool\n\nReturn whether the object has an attribute with the given name.\n(This is done by calling getattr(object,name)and catching AttributeError.)\n",
    "hash": "hash(object)-> integer\n\nReturn a hash value for the object. Two objects with the same value have\nthe same hash value. The reverse is not necessarily true,but likely.\n",
    "help": "Define the builtin  help .\n\n This is a wrapper around pydoc.help that provides a helpful message\n when  help  is typed at the Python interactive prompt.\n\n Calling help()at the Python prompt starts an interactive help session.\n Calling help(thing)prints help for the python object  thing .\n \n",
    "hex": "hex(number)-> string\n\nReturn the hexadecimal representation of an integer.\n\n >>> hex(3735928559)\n  0xdeadbeef \n\n",
    "id": "id(object)-> integer\n\nReturn the identity of an object. This is guaranteed to be unique among\nsimultaneously existing objects.(Hint:it s the object s memory address.)\n",
    "input": "input([prompt])-> string\n\nRead a string from standard input. The trailing newline is stripped.\nIf the user hits EOF(Unix:Ctl-D,Windows:Ctl-Z+Return),raise EOFError.\nOn Unix,GNU readline is used if enabled. The prompt string,if given,\nis printed without a trailing newline before reading.\n",
    "int": "int(x=0)-> integer\nint(x,base=10)-> integer\n\nConvert a number or string to an integer,or return 0 if no arguments\nare given. If x is a number,return x.__int__(). For floating point\nnumbers,this truncates towards zero.\n\nIf x is not a number or if base is given,then x must be a string,\nbytes,or bytearray instance representing an integer literal in the\ngiven base. The literal can be preceded by  +  or  -  and be surrounded\nby whitespace. The base defaults to 10. Valid bases are 0 and 2-36.\nBase 0 means to interpret the base from the string as an integer literal.\n>>> int( 0b100 ,base=0)\n4\n",
    "isinstance": "isinstance(object,class-or-type-or-tuple)-> bool\n\nReturn whether an object is an instance of a class or of a subclass thereof.\nWith a type as second argument,return whether that is the object s type.\nThe form using a tuple, isinstance(x, (A, B, ...)), is a shortcut for\nisinstance(x, A) or isinstance(x, B) or ... (etc.).\n",
    "issubclass": "issubclass(C, B) -> bool\n\nReturn whether class C is a subclass (i.e., a derived class) of class B.\nWhen using a tuple as the second argument issubclass(X, (A, B, ...)),\nis a shortcut for issubclass(X, A) or issubclass(X, B) or ... (etc.).\n",
    "iter": "iter(iterable) -> iterator\niter(callable, sentinel) -> iterator\n\nGet an iterator from an object.  In the first form, the argument must\nsupply its own iterator, or be a sequence.\nIn the second form, the callable is called until it returns the sentinel.\n",
    "len": "len(object)\n\nReturn the number of items of a sequence or collection.\n",
    "list": "list() -> new empty list\nlist(iterable) -> new list initialized from iterable s items\n",
    "locals": "locals()-> dictionary\n\nUpdate and return a dictionary containing the current scope s local variables.\n",
    "map": "map(func, *iterables) --> map object\n\nMake an iterator that computes the function using arguments from\neach of the iterables.  Stops when the shortest iterable is exhausted.\n",
    "max": "max(iterable, *[, default=obj, key=func]) -> value\nmax(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its biggest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the largest argument.\n",
    "memoryview": "memoryview(object)\n\nCreate a new memoryview object which references the given object.\n",
    "min": "min(iterable, *[, default=obj, key=func]) -> value\nmin(arg1, arg2, *args, *[, key=func]) -> value\n\nWith a single iterable argument, return its smallest item. The\ndefault keyword-only argument specifies an object to return if\nthe provided iterable is empty.\nWith two or more arguments, return the smallest argument.\n",
    "next": "next(iterator[, default])\n\nReturn the next item from the iterator. If default is given and the iterator\nis exhausted, it is returned instead of raising StopIteration.\n",
    "object": "The most base type\n",
    "oct": "oct(number) -> string\n\nReturn the octal representation of an integer.\n\n   >>> oct(342391)\n    0o1234567 \n\n",
    "open": "open(file, mode= r , buffering=-1, encoding=None,\n     errors=None, newline=None, closefd=True, opener=None) -> file object\n\nOpen file and return a stream.  Raise IOError upon failure.\n\nfile is either a text or byte string giving the name (and the path\nif the file isn t in the current working directory)of the file to\nbe opened or an integer file descriptor of the file to be\nwrapped.(If a file descriptor is given,it is closed when the\nreturned I/O object is closed,unless closefd is set to False.)\n\nmode is an optional string that specifies the mode in which the file\nis opened. It defaults to  r  which means open for reading in text\nmode. Other common values are  w  for writing(truncating the file if\nit already exists), x  for creating and writing to a new file,and\n a  for appending(which on some Unix systems,means that all writes\nappend to the end of the file regardless of the current seek position).\nIn text mode,if encoding is not specified the encoding used is platform\ndependent:locale.getpreferredencoding(False)is called to get the\ncurrent locale encoding.(For reading and writing raw bytes use binary\nmode and leave encoding unspecified.)The available modes are:\n\n========================================================================\nCharacter Meaning\n------------------------------------------------------------------------\n r  open for reading(default)\n w  open for writing,truncating the file first\n x  create a new file and open it for writing\n a  open for writing,appending to the end of the file if it exists\n b  binary mode\n t  text mode(default)\n +  open a disk file for updating(reading and writing)\n U  universal newline mode(deprecated)\n========================================================================\n\nThe default mode is  rt (open for reading text). For binary random\naccess,the mode  w+b  opens and truncates the file to 0 bytes,while\n r+b  opens the file without truncation. The  x  mode implies  w  and\nraises an `FileExistsError` if the file already exists.\n\nPython distinguishes between files opened in binary and text modes,\neven when the underlying operating system does not. Files opened in\nbinary mode (appending  b  to the mode argument) return contents as\nbytes objects without any decoding. In text mode (the default, or when\n t  is appended to the mode argument), the contents of the file are\nreturned as strings, the bytes having been first decoded using a\nplatform-dependent encoding or using the specified encoding if given.\n\n U  mode is deprecated and will raise an exception in future versions\nof Python.  It has no effect in Python 3.  Use newline to control\nuniversal newlines mode.\n\nbuffering is an optional integer used to set the buffering policy.\nPass 0 to switch buffering off (only allowed in binary mode), 1 to select\nline buffering (only usable in text mode), and an integer > 1 to indicate\nthe size of a fixed-size chunk buffer.  When no buffering argument is\ngiven, the default buffering policy works as follows:\n\n* Binary files are buffered in fixed-size chunks; the size of the buffer\n  is chosen using a heuristic trying to determine the underlying device s\n  block size  and falling back on `io.DEFAULT_BUFFER_SIZE`.\n  On many systems, the buffer will typically be 4096 or 8192 bytes long.\n\n*  Interactive  text files (files for which isatty() returns True)\n  use line buffering.  Other text files use the policy described above\n  for binary files.\n\nencoding is the name of the encoding used to decode or encode the\nfile. This should only be used in text mode. The default encoding is\nplatform dependent, but any encoding supported by Python can be\npassed.  See the codecs module for the list of supported encodings.\n\nerrors is an optional string that specifies how encoding errors are to\nbe handled---this argument should not be used in binary mode. Pass\n strict  to raise a ValueError exception if there is an encoding error\n(the default of None has the same effect), or pass  ignore  to ignore\nerrors. (Note that ignoring encoding errors can lead to data loss.)\nSee the documentation for codecs.register or run  help(codecs.Codec) \nfor a list of the permitted encoding error strings.\n\nnewline controls how universal newlines works (it only applies to text\nmode). It can be None,   ,  \n ,  \\r , and  \\r\n .  It works as\nfollows:\n\n* On input, if newline is None, universal newlines mode is\n  enabled. Lines in the input can end in  \n ,  \\r , or  \\r\n , and\n  these are translated into  \n  before being returned to the\n  caller. If it is   , universal newline mode is enabled, but line\n  endings are returned to the caller untranslated. If it has any of\n  the other legal values, input lines are only terminated by the given\n  string, and the line ending is returned to the caller untranslated.\n\n* On output, if newline is None, any  \n  characters written are\n  translated to the system default line separator, os.linesep. If\n  newline is    or  \n , no translation takes place. If newline is any\n  of the other legal values, any  \n  characters written are translated\n  to the given string.\n\nIf closefd is False, the underlying file descriptor will be kept open\nwhen the file is closed. This does not work when a file name is given\nand must be True in that case.\n\nA custom opener can be used by passing a callable as *opener*. The\nunderlying file descriptor for the file object is then obtained by\ncalling *opener* with (*file*, *flags*). *opener* must return an open\nfile descriptor (passing os.open as *opener* results in functionality\nsimilar to passing None).\n\nopen() returns a file object whose type depends on the mode, and\nthrough which the standard file operations such as reading and writing\nare performed. When open() is used to open a file in a text mode ( w ,\n r ,  wt ,  rt , etc.), it returns a TextIOWrapper. When used to open\na file in a binary mode, the returned class varies: in read binary\nmode, it returns a BufferedReader; in write binary and append binary\nmodes, it returns a BufferedWriter, and in read/write mode, it returns\na BufferedRandom.\n\nIt is also possible to use a string or bytearray as a file for both\nreading and writing. For strings StringIO can be used like a file\nopened in a text mode, and for bytes a BytesIO can be used like a file\nopened in a binary mode.\n\n",
    "ord": "ord(c) -> integer\n\nReturn the integer ordinal of a one-character string.\n",
    "pow": "pow(x, y[, z]) -> number\n\nWith two arguments, equivalent to x**y.  With three arguments,\nequivalent to (x**y) % z, but may be more efficient (e.g. for ints).\n",
    "print": "print(value, ..., sep=   , end= \n , file=sys.stdout, flush=False)\n\nPrints the values to a stream, or to sys.stdout by default.\nOptional keyword arguments:\nfile:  a file-like object (stream); defaults to the current sys.stdout.\nsep:   string inserted between values, default a space.\nend:   string appended after the last value, default a newline.\nflush: whether to forcibly flush the stream.\n",
    "property": "property(fget=None, fset=None, fdel=None, doc=None) -> property attribute\n\nfget is a function to be used for getting an attribute value, and likewise\nfset is a function for setting, and fdel a function for del ing, an\nattribute.  Typical use is to define a managed attribute x:\n\nclass C(object):\n    def getx(self): return self._x\n    def setx(self, value): self._x = value\n    def delx(self): del self._x\n    x = property(getx, setx, delx,  I m the  x  property. )\n\nDecorators make defining new properties or modifying existing ones easy:\n\nclass C(object):\n    @property\n    def x(self):\n         I am the  x  property. \n        return self._x\n    @x.setter\n    def x(self, value):\n        self._x = value\n    @x.deleter\n    def x(self):\n        del self._x\n\n",
    "quit": "No documentation available",
    "range": "range(stop) -> range object\nrange(start, stop[, step]) -> range object\n\nReturn a virtual sequence of numbers from start to stop by step.\n",
    "repr": "repr(object) -> string\n\nReturn the canonical string representation of the object.\nFor most object types, eval(repr(object)) == object.\n",
    "reversed": "reversed(sequence) -> reverse iterator over values of the sequence\n\nReturn a reverse iterator\n",
    "round": "round(number[, ndigits]) -> number\n\nRound a number to a given precision in decimal digits (default 0 digits).\nThis returns an int when called with one argument, otherwise the\nsame type as the number. ndigits may be negative.\n",
    "set": "set() -> new empty set object\nset(iterable) -> new set object\n\nBuild an unordered collection of unique elements.\n",
    "setattr": "setattr(object, name, value)\n\nSet a named attribute on an object; setattr(x,  y , v) is equivalent to\n``x.y = v  .\n",
    "slice": "slice(stop)\nslice(start, stop[, step])\n\nCreate a slice object.  This is used for extended slicing (e.g. a[0:10:2]).\n",
    "sorted": "sorted(iterable, key=None, reverse=False) --> new sorted list\n",
    "staticmethod": "staticmethod(function) -> method\n\nConvert a function to be a static method.\n\nA static method does not receive an implicit first argument.\nTo declare a static method, use this idiom:\n\n     class C:\n     def f(arg1, arg2, ...): ...\n     f = staticmethod(f)\n\nIt can be called either on the class (e.g. C.f()) or on an instance\n(e.g. C().f()).  The instance is ignored except for its class.\n\nStatic methods in Python are similar to those found in Java or C++.\nFor a more advanced concept, see the classmethod builtin.\n",
    "str": "str(object=  ) -> str\nstr(bytes_or_buffer[, encoding[, errors]]) -> str\n\nCreate a new string object from the given object. If encoding or\nerrors is specified, then the object must expose a data buffer\nthat will be decoded using the given encoding and error handler.\nOtherwise, returns the result of object.__str__() (if defined)\nor repr(object).\nencoding defaults to sys.getdefaultencoding().\nerrors defaults to  strict .\n",
    "sum": "sum(iterable[, start]) -> value\n\nReturn the sum of an iterable of numbers (NOT strings) plus the value\nof parameter  start  (which defaults to 0).  When the iterable is\nempty, return start.\n",
    "super": "No documentation available",
    "tuple": "tuple() -> empty tuple\ntuple(iterable) -> tuple initialized from iterable s items\n\nIf the argument is a tuple, the return value is the same object.\n",
    "type": "type(object_or_name, bases, dict)\ntype(object) -> the object s type\ntype(name, bases, dict) -> a new type\n",
    "vars": "vars([object]) -> dictionary\n\nWithout arguments, equivalent to locals().\nWith an argument, equivalent to object.__dict__.\n",
    "zip": "zip(iter1 [,iter2 [...]]) --> zip object\n\nReturn a zip object whose .__next__() method returns a tuple where\nthe i-th element comes from the i-th iterable argument.  The .__next__()\nmethod continues until the shortest iterable in the argument sequence\nis exhausted and then it raises StopIteration.\n",
}