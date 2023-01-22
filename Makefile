# This program is free software; you can redistribute it and/or
# modify it under the terms of the GNU General Public License
# as published by the Free Software Foundation; either version 2
# of the License, or (at your option) any later version.

include $(TOPDIR)/rules.mk

LUCI_TITLE:=Design Theme
LUCI_DEPENDS:=
PKG_VERSION:=3.3
PKG_RELEASE:=20230122

include $(TOPDIR)/feeds/luci/luci.mk

define Package/luci-theme-design/postinst
#!/bin/sh
[ -n "$IPKG_INSTROOT" ] || {
  (. /etc/uci-defaults/90_luci-theme-design) && rm -rf /etc/uci-defaults/90_luci-theme-design
  exit 0
}
endef

# call BuildPackage - OpenWrt buildroot signature
