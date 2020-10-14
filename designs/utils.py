import base64
from django.core.files.base import ContentFile


def decode_base64(data, name=None):
    _format, _image_string = data.split(";base64,")
    _name, ext = _format.split("/")
    if not name:
        name = _name.split(":")[-1]
    return ContentFile(base64.b64decode(_image_string), name=f"{name}.{ext}")
