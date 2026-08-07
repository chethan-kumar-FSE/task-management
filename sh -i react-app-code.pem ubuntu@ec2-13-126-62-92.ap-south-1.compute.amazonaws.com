[33mcommit de212f960a34f5df4f2f84578fb8b52ecfbf9514[m[33m ([m[1;36mHEAD[m[33m -> [m[1;32mmain[m[33m, [m[1;31morigin/main[m[33m, [m[1;31morigin/HEAD[m[33m)[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Sat Aug 8 01:27:45 2026 +0530

    cahnge-dnoe

[33mcommit e912b8cf1c4792eae746d19f70eb855499ed12b1[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Sat Aug 8 01:06:49 2026 +0530

    test

[33mcommit 07b40cb119e77fbda0be85e7f9f40650057f4ee4[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Sat Aug 8 00:40:36 2026 +0530

    fix-done-text

[33mcommit c4e97c3a1885592835fe0659c20aa93e73d6cce4[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Sat Aug 8 00:33:47 2026 +0530

    fix-done

[33mcommit a53bde7f1d8f5c74011ecd9d03f88b7a466e28fa[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Fri Aug 7 23:45:06 2026 +0530

    Add console log for debugging in App component

[33mcommit b24993be97f18d5cc0b62140c42be39d3d1a48b5[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Fri Aug 7 23:28:13 2026 +0530

    done

[33mcommit 8a902f379ad4073a3f1e7819975e348e9c92e593[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Thu Aug 6 19:06:03 2026 +0530

    change-done

[33mcommit 987f607e68123a06224b5e4e5956fc1647de24e5[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Thu Aug 6 18:35:15 2026 +0530

    change-done

[33mcommit 6fca86fd8cfd8a62e80ed82b0a9afc3d1aed2e5b[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 18:34:15 2026 +0530

    Enhance GitHub Actions workflow for manual deployment
    
    Added workflow_dispatch event to trigger manual deployment and separated build and deploy jobs.

[33mcommit 59bf8b859a708dea2e54ee7db3ee72ea1180574a[m
Author: chethan-kumar-FSD <chethananderson4@gmail.com>
Date:   Thu Aug 6 18:14:48 2026 +0530

    change-done

[33mcommit 0dea4a0418189a3cfdbc6594aa99cb68531429b9[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 16:01:01 2026 +0530

    Change taskId generation method in useCreateTasks hook
    
    Replace crypto.randomUUID() with Math.random() for taskId generation.

[33mcommit fbf5190a81d37db5e076267df2859c2fe16d3336[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 15:04:37 2026 +0530

    Change runner from ubuntu-latest to self-hosted

[33mcommit 26538753e94b2922cabd3ddee046e0b9fb0a9e97[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 14:44:11 2026 +0530

    Remove npm publish job from workflow
    
    Removed the publish-gpr job from the GitHub Actions workflow.

[33mcommit 6dc01606770d3ccf4703868fd7ee919e41bb50d9[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 14:22:13 2026 +0530

    Change default branch from 'master' to 'main'

[33mcommit a284c000f7dc656ed8ebfbcf5cbe05bdc2808873[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Thu Aug 6 14:17:29 2026 +0530

    Update workflow to trigger on push to master
    
    Added a push event trigger for the master branch and updated the build step.

[33mcommit deaf6398b96b9209ef8ed46dbdd428bbd6d00e4f[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 11:48:28 2026 +0530

    Update README.md

[33mcommit be6053f6bbaa6f23b000d7ef8846b3f842744ef2[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 11:46:15 2026 +0530

    accessibility-fix

[33mcommit e1eace907830a4ef35a68e44c9679d35692ed066[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 11:25:00 2026 +0530

    added constant variables

[33mcommit 4a0429010e5bb8a9c489c51c158a938f8cd45f6d[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 11:11:12 2026 +0530

    fixes

[33mcommit d92d3492925b1fb653ec60353bb0b53afa3ad736[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 10:50:13 2026 +0530

    added esbuild for better minification

[33mcommit 1533549350a4862075abcb9098ec3a4f43efa348[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 10:46:25 2026 +0530

    added-oxc-minfication

[33mcommit ab27ab61f1cb993d6008fd4f685a94b14fb53d93[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 10:43:04 2026 +0530

    added-config

[33mcommit 54960dda0cced0eba7b476641f00068896e49499[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 10:10:09 2026 +0530

    Update README.md

[33mcommit 69bc64a94bc365238d9fa07d430a6c59ee026ddf[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 10:09:33 2026 +0530

    Update README.md

[33mcommit 15caed1f5242fd205d7da67efdd0b657679a1577[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 10:07:18 2026 +0530

    Update README.md

[33mcommit a37d3f36b0074a23e03b8206de18928eb55dbd45[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 10:01:36 2026 +0530

    added-accessiblity-to-toggle-button

[33mcommit f0d579e940dbd503426ab0bd6c94e7bc2c1ab3cd[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 09:54:40 2026 +0530

    Update README.md

[33mcommit edc303c9d67226d7def8abf83fc3c25786389160[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 02:35:27 2026 +0530

    Update README.md

[33mcommit f00f380bd1dc6442dd1417c3adc9bd8fec093ef4[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 02:35:03 2026 +0530

    Update README.md

[33mcommit 2454855273cd0737d47dec9c2aeea4b4324a25e7[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 02:29:07 2026 +0530

    added-spinner-loader

[33mcommit d661608f1dce816d0667cce264d74f5dfc2c7c8b[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 02:21:40 2026 +0530

    lazy-loading-added

[33mcommit d92c97c3ffbcddf539726c150c176a3310a7e7ce[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 02:10:52 2026 +0530

    Update README.md

[33mcommit c98ec1f44c7a8cd034ef94aa3e590f39ce02fab5[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 02:06:39 2026 +0530

    Update README.md

[33mcommit ddad51664ddf235b68ca1d8bfd8c511b08849d76[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 02:05:29 2026 +0530

    form-validation-screenshot-added

[33mcommit 3c94c531bce07beb0a91313e71e928d3d1397d87[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 02:03:41 2026 +0530

    Update README.md

[33mcommit 91032ea0c2744eea23b3d8b9dc117e1d909c5cc4[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 02:00:51 2026 +0530

    adding-screenshots

[33mcommit ed1fb60d61225ecec585d56645d68f7d84ed60bb[m
Author: chethankumar_03 <ckumar@gammastack.com>
Date:   Sun Mar 22 01:01:36 2026 +0530

    project

[33mcommit 84a25b53923607844f380c7de18618e6d80091ca[m
Author: N Chethan Kumar <46744971+chethan-kumar-FSE@users.noreply.github.com>
Date:   Sun Mar 22 00:54:14 2026 +0530

    Initial commit
