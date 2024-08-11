""" fasd """

class CustomException(Exception):
    """sumary_line
    
    Keyword arguments:
    argument -- description
    Return: return_description
    """
    def __init__(self, message, status_code=400):
        super().__init__(message)
        self.message = message
        self.status_code = status_code
    def http_response(self):
        """sumary_line
        
        Keyword arguments:
        argument -- description
        Return: return_description
        """
        return {
            "message": self.message,
            "status_code": self.status_code
        }, self.status_code

class PDFException(CustomException):
    """sumary_line
    """
    def __init__(self, message="PDF Exception", status_code=400):
        super().__init__(message)  # Pass only the message to BaseException

# Example usage
try:
    raise PDFException("hello", 300)
except PDFException as e:
    print(e.http_response())
    # Output: ({'message': 'hello', 'status_code': 300}, 300)




