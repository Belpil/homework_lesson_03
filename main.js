const routeConfig = {
          home: 'home',
          info: 'info',
          user: {
              list: 'user-list',
              edit: 'edit-user',
              create: 'create-user'
          }
      },
      notFoundPageTemplateId = 'page-not-found',
      routedElement = $('main');

onHashChange();
$(window).on('hashchange', onHashChange);

function onHashChange() {
    const path = getHashPath(),
          templateId = getTemplateId(path, routeConfig) || notFoundPageTemplateId;

    setTemplate(routedElement, templateId);
}

function getTemplateId(path, route) {
    if (typeof route[ path[0] ] === 'object') {
        return getTemplateId(path.slice(1), route[ path[0] ]);
    } else {
        return route[ path[0] ] || undefined;
    }
}

function getHashPath() {
    return location.hash.slice(1).split('/');
}

function setTemplate(destinationElement, templateId) {
    const temlateElement = document.getElementById(templateId);

    var clone = document.importNode(temlateElement.content, true);

    destinationElement.empty();
    destinationElement.append(clone);
}