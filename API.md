# API reference for Cactus iShowDrive

These lines got by using WireShark and PCAPDroid.

File manipulation requests.

```
POST /nextdrive.api?sub_command_type=upload&command_type=file&name=${filename}&time=${unix_time}
GET /nextdrive.api?sub_command_type=get_exif_thumbnail&command_type=file&name=${filename}
GET /nextdrive.api?sub_command_type=list&command_type=file&name=${filename}
GET /nextdrive.api?sub_command_type=create&command_type=file&name=${filename}&time=${unix_time}
GET /nextdrive.api?sub_command_type=remove&command_type=file&name=${filename}
GET /sdcard/${filename}
```

Config requests:

```
GET /nextdrive.api?sub_command_type=nextdrive&command_type=info
GET /nextdrive.api?sub_command_type=storage&command_type=info
GET /nextdrive.api?sub_command_type=get_config&command_type=wifi&target=ap
GET /nextdrive.api?sub_command_type=get_config&command_type=wifi&target=sta
GET /nextdrive.api?sub_command_type=set_config&security=none&command_type=wifi&ssid=${SSID}&target=ap
GET /nextdrive.api?sub_command_type=enable_network&command_type=wifi&id=0&target=sta
GET /nextdrive.api?sub_command_type=get_scan_result&command_type=wifi
GET /nextdrive.api?sub_command_type=get_status&command_type=wifi
GET /nextdrive.api?sub_command_type=do_scan&command_type=wifi
GET /nextdrive.api?sub_command_type=set_config&security=wpapsk&command_type=wifi&bssid={BSSID}&passphrase=${password}&ssid=${SSID}&target=sta
```

Examples (CURL):

```
curl -X POST --user "userid:" -T file.zip "http://192.168.100.1/nextdrive.api?sub_command_type=upload&command_type=file&name=/test.zip&time=1655032680"
curl -X GET --user "userid:" "http://192.168.100.1/nextdrive.api?sub_command_type=list&command_type=file&name=/"
curl -X GET --user "userid:" "http://192.168.100.1/nextdrive.api?sub_command_type=remove&command_type=file&name=/test.zip"
```

NOTE: Part `--user "userid:"` can be ignored.

Verification? It can be ignored.

```
GET /nextdrive.api?sub_command_type=get_certificate&command_type=authentication
GET /nextdrive.api?sub_command_type=challenge_response&command_type=authentication&challenge=8jN%2BZGxj3T6oW9p2HgQXsGsmW1gH
```
