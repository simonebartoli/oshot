import json
import os
import blurhash

counter = 0
urlObject = []

for directory in os.listdir():
    # print(directory)
    if not os.path.isfile(directory):
        # print("                                       Crawling:",directory)
        lines = ["", ""]
        afterfound = False
        minicounter = 0
        singleOBJ = {}
        for filename in os.listdir(directory):
            minicounter += 1
            fullpath = os.path.join(directory, filename)
            lowerFilename = filename.lower()
            if "after" in lowerFilename:
                with open(fullpath, 'rb') as image_file:
                    singleOBJ['hashAfter'] = blurhash.encode(image_file, x_components=4, y_components=3)

                print(counter)
                afterfound = True
                singleOBJ["after"] = fullpath
                # lines[1] = (
                #     "galleryURLMapping.set(" + str(counter + 1) + ',"' + fullpath + '")'
                # )
            else:
                with open(fullpath, 'rb') as image_file:
                    singleOBJ['hashBefore'] = blurhash.encode(image_file, x_components=4, y_components=3)

                singleOBJ["before"] = fullpath
                print(counter)
                # lines[0] = (
                #     "galleryURLMapping.set(" + str(counter) + ',"' + fullpath + '")'
                # )
        if minicounter != 2:
            raise Exception("sds")
        if afterfound:
            urlObject.append(singleOBJ)

            #    print(lines[0])
            #    print(lines[1])
        else:
            print("!!!!!!!!!!!!  \/ POTENTIALLY WRONG EDIT MANUALY \/ !!!!!!!!")
            print(lines[0])
            print(lines[1])
            print("!!!!!!!!!!!!  /\ POTENTIALLY WRONG EDIT MANUALY /\ !!!!!!!!")
        counter += 1

        # print("                                       Finished:",directory)
    else:
        pass
        # print("                                       Ommited:",directory)


f = open("links.txt", "w")
f.write(json.dumps(urlObject).replace("\\\\", "/"))
print(json.dumps(urlObject).replace("\\\\", "/"))
