package shim

import (
	"github.com/devopsarr/terraform-provider-radarr/v2/internal/provider"
	tf "github.com/hashicorp/terraform-plugin-framework/provider"
)

func NewProvider() tf.Provider {
	return provider.New()
}
