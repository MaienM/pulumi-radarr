---
title: Radarr Installation & Configuration
meta_desc: Information on how to install the Radarr provider.
layout: installation
---

## Installation

The Pulumi Radarr provider is available as a package in all Pulumi languages:

* JavaScript/TypeScript: [`@maienm/pulumi-radarr`](https://www.npmjs.com/package/@maienm/pulumi-radarr)
* Python: [`pulumi_radarr`](https://pypi.org/project/pulumi_radarr/)
* Go: [`github.com/MaienM/pulumi-radarr/sdk/go/radarr`](https://pkg.go.dev/github.com/MaienM/pulumi-radarr/sdk/go/radarr)
* .NET: [`MaienM.Radarr`](https://www.nuget.org/packages/MaienM.Radarr)


## Configuration

> Note:  
> Replace the following **sample content**, with the configuration options
> of the wrapped Terraform provider and remove this note.

The following configuration points are available for the `radarr` provider:

- `radarr:apiKey` (environment: `radarr_API_KEY`) - the API key for `radarr`
- `radarr:region` (environment: `radarr_REGION`) - the region in which to deploy resources

### Provider Binary

The Radarr provider binary is a third party binary. It can be installed using the `pulumi plugin` command.

```bash
pulumi plugin install resource radarr <version>
```

Replace the version string `<version>` with your desired version.
