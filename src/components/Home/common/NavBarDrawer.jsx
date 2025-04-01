import { CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Sidebar, SidebarContent, SidebarGroupLabel, SidebarMenu, SidebarMenuItem } from "@/components/ui/sidebar"


export const NavBarDrawer = () => {
  return(
    <>
     <Sidebar side="right" collapsible="offcanvas">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 pt-4">Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {NavBar().map((item) =>
                item.type === "dropdown" ? (
                  <Collapsible
                    key={item.id}
                    open={!!openDropdowns[item.id]}
                    onOpenChange={() => toggleDropdown(item.id)}
                  >
                    <CollapsibleTrigger className="w-full text-left">
                      <SidebarMenuItem>
                        <SidebarMenuButton className="flex justify-between w-full">
                          {item.title}
                          <span>{openDropdowns[item.id] ? "▾" : "▸"}</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      {item.options.map((subItem, idx) => (
                        <SidebarMenuItem key={idx} className="pl-6">
                          <SidebarMenuButton asChild>
                            <Link href={subItem.link} onClick={handleClose}>
                              {subItem.title}
                            </Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </CollapsibleContent>
                  </Collapsible>
                ) : (
                  <SidebarMenuItem key={item.id}>
                    <SidebarMenuButton asChild>
                      <Link href={item.link} onClick={handleClose}>
                        {item.title}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
    </>
  )
}